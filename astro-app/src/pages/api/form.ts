// src/pages/api/form.ts
import type { APIRoute } from "astro";

// Эндпоинты в Astro экспортируют функции, названные по HTTP-методу.
// Наша форма будет отправлять POST-запрос.
export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Получаем данные из тела запроса
    // request.formData() разбирает тело как 'multipart/form-data' или 'application/x-www-form-urlencoded'
    const formData = await request.formData();

    // 2. Преобразуем FormData в обычный объект для удобства
    const data = Object.fromEntries(formData.entries());

    // 3. Выводим данные в консоль сервера, где запущен Astro
    console.log("✅ Получены данные из формы:");
    console.log(data);

    // 4. Отправляем успешный ответ обратно в браузер
    return new Response(
      JSON.stringify({
        message: "Данные успешно получены!",
        formData: data, // Можно даже вернуть данные обратно для отладки
      }),
      { status: 200 }
    );
  } catch (error) {
    // 5. Обрабатываем возможные ошибки
    console.error("❌ Ошибка при обработке формы:", error);
    return new Response(
      JSON.stringify({
        message: "Произошла ошибка на сервере.",
      }),
      { status: 500 }
    );
  }
};
