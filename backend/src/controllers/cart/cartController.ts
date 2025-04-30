import prisma from "../../prisma/prismaClient";
import { Request, Response } from "express";
import { z } from "zod";

const BodyRequestAddCart = z.object({
  title: z.string().min(1),
  quantity: z.number().nonnegative(),
  price: z.number().positive(),
})

const BodyRequestEditCart = z.object({
  title: z.string().min(1),
  quantity: z.number().nonnegative(),
  price: z.number().positive(),
})

interface Params {
  id: string;
}

const totalValue = (quantity: number, price: number): number => {
  return price * quantity;
}

export const addProductToCart = async (req: Request, res: Response): Promise<void> => {
  const validatedData = BodyRequestAddCart.parse(req.body);

  const { title, quantity, price } = validatedData;

  const priceAtt = totalValue(quantity, price);

  try {
    const cart = await prisma.cart.create({
      data: {
        title,
        quantity,
        price,
        totalPrice: priceAtt,
      }
    });

    res.status(200).json({ success: true, message: "Produto adicionado ao carrinho com sucesso!", cart });
  } catch (err) {
    console.error("Ocorreu um erro ao adicionar o produto ao carrinho: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mis tarde!" });
  }
}

export const editProductOfCart = async (req: Request<Params>, res: Response): Promise<void> => {
  const validatedData = BodyRequestEditCart.parse(req.body);

  const { id } = req.params;

  const { title, quantity, price } = validatedData;

  const priceAtt = totalValue(quantity, price);

  try {

    const cart = await prisma.cart.update({
      where: {
        id,
      },
      data: {
        title,
        quantity,
        price,
        totalPrice: priceAtt,
      }
    });

    res.status(200).json({ success: true, message: "Carrinho editado com sucesso!", cart });
  } catch (err) {
    console.error("Ocorreu um erro ao editar o carringo: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
}

export const deleteProductOfCart = async (req: Request<Params>, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.cart.delete({ where: { id } });

    res.status(200).json({ success: true, message: "Produto deletado do carriho com sucesso!" });
  } catch (err) {
    console.error("Ocorreu um erro ao deletar o produto do carrinho: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
}

export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.cart.findMany();

    res.status(200).json({ success: true, message: "Carrinho carregado com sucesso!" });
  } catch (err) {
    console.error("Ocorreu um erro ao carregar o carrinho: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" })
  }
}
