import prisma from "../../prisma/prismaClient";
import { Request, Response } from "express";
import { z } from "zod";

// Esquema de validação para criar um produto usando Zod.
// Define os campos obrigatórios e suas regras de validação.
const BodyRequestCreateProduct = z.object({
  title: z.string().min(1), // Título é obrigatório e deve ter pelo menos 1 caractere.
  description: z.string().min(1), // Descrição é obrigatória e deve ter pelo menos 1 caractere.
  price: z.number().positive(), // Preço é obrigatório e deve ser um número positivo.
  discount: z.number().optional(), // Desconto é opcional e, se fornecido, deve ser um número.
  amount: z.number().nonnegative(), // Quantidade é obrigatória e não pode ser negativa.
  image: z.string().url(), // URL da imagem é obrigatória e deve ser uma URL válida.
  category: z.string().min(1), // Categoria é obrigatória e deve ter pelo menos 1 caractere.
});

// Esquema de validação para atualizar um produto.
// Similar ao esquema de criação, mas pode ser ajustado conforme necessário.
const BodyRequestUpdateProduct = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  discount: z.number().optional(),
  amount: z.number().nonnegative(),
  image: z.string().url(),
  category: z.string().min(1),
});

// Interface para os parâmetros de rota (usada em endpoints que recebem IDs).
interface Params {
  id: string; // ID do produto, usado para identificar o recurso no banco de dados.
}

// Função para gerar um número aleatório dentro de um intervalo específico.
// Usada para criar SKUs únicos para os produtos.
const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Função para verificar o status do estoque com base na quantidade.
// Retorna "Em estoque" se a quantidade for maior que zero, caso contrário "Sem Estoque".
const checkStock = (amount: number): string => {
  return amount > 0 ? "Em estoque" : "Sem Estoque";
};

// Função para calcular o preço com desconto.
// Se o desconto for fornecido e maior que zero, retorna o preço com desconto.
// Caso contrário, retorna `null` (sem desconto).
const checkDiscount = (price: number, discount?: number): number | null => {
  if (discount && discount > 0) {
    return price - discount;
  } else {
    return null;
  }
};

// Endpoint para criar um novo produto.
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  // Valida os dados recebidos no corpo da requisição usando o esquema `BodyRequestCreateProduct`.
  const validatedData = BodyRequestCreateProduct.safeParse(req.body);

  // Se a validação falhar, retorna um erro 400 com uma mensagem.
  if (!validatedData.success) {
    res.status(400).json({ success: false, error: "Todos os campos são obrigatórios!" });
    return;
  }

  // Desestrutura os dados validados para uso no restante da função.
  let { title, description, price, amount, image, category, discount } = validatedData.data;

  // Gera um SKU aleatório para o produto.
  const randomSKU = generateRandomNumber(100000, 999999);

  // Verifica o status do estoque com base na quantidade fornecida.
  const hasStock = checkStock(amount);

  // Calcula o preço com desconto (se aplicável).
  const hasDiscount = checkDiscount(price, discount);

  try {
    // Cria o produto no banco de dados usando o Prisma.
    const product = await prisma.products.create({
      data: {
        sku: randomSKU, // SKU gerado automaticamente.
        title,
        category,
        description,
        price,
        discount: hasDiscount, // Preço com desconto ou `null`.
        amount,
        stock: hasStock, // Status do estoque ("Em estoque" ou "Sem Estoque").
        image,
      },
    });

    // Retorna uma resposta de sucesso com os detalhes do produto criado.
    res.status(200).json({ success: true, message: "Produto cadastrado com sucesso!", product });
  } catch (err) {
    // Captura erros durante a criação do produto e retorna uma resposta 500.
    console.error("Ocorreu um erro ao cadastrar o produto: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
};

// Endpoint para atualizar um produto existente.
export const updateProduct = async (req: Request<Params>, res: Response): Promise<void> => {
  // Valida os dados recebidos no corpo da requisição usando o esquema `BodyRequestUpdateProduct`.
  const validatedData = BodyRequestUpdateProduct.parse(req.body);

  // Desestrutura os dados validados para uso no restante da função.
  const { title, description, price, discount, amount, image, category } = validatedData;

  // Extrai o ID do produto dos parâmetros da rota.
  const { id } = req.params;

  // Verifica o status do estoque com base na quantidade fornecida.
  const hasStock = checkStock(amount);

  // Calcula o preço com desconto (se aplicável).
  const hasDiscount = checkDiscount(price, discount);

  try {
    // Atualiza o produto no banco de dados usando o Prisma.
    const product = await prisma.products.update({
      where: {
        id, // Identificador do produto a ser atualizado.
      },
      data: {
        title,
        category,
        description,
        price,
        discount: hasDiscount, // Preço com desconto ou `null`.
        amount,
        stock: hasStock, // Status do estoque ("Em estoque" ou "Sem Estoque").
        image,
      },
    });

    // Retorna uma resposta de sucesso com os detalhes do produto atualizado.
    res.status(200).json({ success: true, message: "Produto atualizado com sucesso!", product });
  } catch (err) {
    // Captura erros durante a atualização do produto e retorna uma resposta 500.
    console.error("Ocorreu um erro ao atualizar o produto: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
};

// Endpoint para deletar um produto existente.
export const deleteProduct = async (req: Request<Params>, res: Response): Promise<void> => {
  // Extrai o ID do produto dos parâmetros da rota.
  const { id } = req.params;

  try {
    // Deleta o produto no banco de dados usando o Prisma.
    await prisma.products.delete({ where: { id } });

    // Retorna uma resposta de sucesso indicando que o produto foi deletado.
    res.status(200).json({ success: true, message: "Produto deletado com sucesso!" });
  } catch (err) {
    // Captura erros durante a exclusão do produto e retorna uma resposta 500.
    console.error("Ocorreu erro ao deletar o produto: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
};

// Endpoint para listar todos os produtos.
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    // Busca todos os produtos no banco de dados usando o Prisma.
    const products = await prisma.products.findMany();

    // Retorna uma resposta de sucesso com a lista de produtos.
    res.status(200).json({ success: true, message: "Produtos listados com sucesso!", products });
  } catch (err) {
    // Captura erros durante a listagem dos produtos e retorna uma resposta 500.
    console.error("Ocorreu um erro ao listar os produtos: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
};
