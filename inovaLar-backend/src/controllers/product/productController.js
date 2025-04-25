import prisma from "../../prisma/prismaClient.js";

export const createProduct = async (req, res) => {
  try {
    const productInfo = req.body;
    const statusProduct = productInfo.amount > 0 ? "Em estoque" : "Sem estoque";

    await prisma.product.create({
      data: {
        title: productInfo.title,
        amount: productInfo.amount,
        price: productInfo.price,
        description: productInfo.description,
        category: productInfo.category,
        status: statusProduct
      }
    })

    res.status(200).json({ message: "Produto criado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao cadastrar o produto!" });
  }
}

export const updateProduct = async (req, res) => {
  try {
    const productInfo = req.body;
    const productId = req.params;
    const statusProduct = productInfo.amount > 0 ? "Em estoque" : "Sem estoque";

    await prisma.product.update({
      where: {
        id: productId.id
      },
      data: {
        title: productInfo.title,
        amount: productInfo.amount,
        price: productInfo.price,
        description: productInfo.description,
        category: productInfo.category,
        status: statusProduct
      }
    })

    res.status(200).json({ message: "Produto atualizado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao atualizar o produto!" });
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params;

    await prisma.product.delete({ where: { id: productId.id } });

    res.status(200).json({ message: "Produto deletado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao deletar produto" });
  }
}

export const getProducts = async (req, res) => {
  try {
    await prisma.product.findMany();

    res.status(200).json({ message: "Produtos carregados com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao carregar os produtos!" });
  }
}
