import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  submitForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2, "Имя должно содержать хотя бы 2 символа"),
      email: z.string().email("Пожалуйста, введите корректный email"),
      message: z
        .string()
        .min(10, "Сообщение должно быть не короче 10 символов"),
    }),
    handler: async (validatedData) => {
      console.log("✅ Получены данные из формы:");
      console.log(validatedData);

      return {
        success: true,
        message: `Спасибо, ${validatedData.name}! Ваше сообщение принято.`,
      };
    },
  }),
};
