import prisma from "../../prisma/prismaClient.js";

export const addToCart = async (req, res) => {
  try {
    const cartInfo = req.body;

    await prisma.cart.create({
      data: {
        title: cartInfo.title,
        amount: cartInfo.amount,
        price: cartInfo.price
      }
    })

    res.status(200).json({ message: "Item adicionado ao carrinho!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao adicionar ao carrinho!" });
  }
}

export const editCart = async (req, res) => {
  try {
    const cartInfo = req.body;
    const cartId = req.params;

    await prisma.cart.update({
      where: {
        id: cartId.id
      },
      data: {
        title: cartInfo.title,
        amount: cartInfo.amount,
        price: cartInfo.price
      }
    })

    res.status(200).json({ message: "Carrinho atualizado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao atualizar o carrinho!" });
  }
}

export const deleteToCart = async (req, res) => {
  try {
    const cartId = req.params;

    await prisma.cart.delete({ where: { id: cartId.id } });

    res.status(200).json({ message: "Item deletado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao deletar um item do carrinho!" });
  }
}

export const getCart = async (req, res) => {
  try {
    await prisma.cart.findMany();

    res.status(200).json({ message: "Carrinho carregado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao carregar o carrinho!" });
  }
}
