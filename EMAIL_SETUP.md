# Email Setup Instructions

## Налаштування відправки email з форми контакту

### ⚠️ ПРОБЛЕМА: Письма не приходят

**Причина:** Не настроен Gmail App Password в файле `.env.local`

### 1. Створіть App Password для Gmail

1. Увійдіть в Google Account (alien.token.workspace@gmail.com)
2. Перейдіть до Security → 2-Step Verification
3. Увімкніть 2-Step Verification якщо ще не увімкнено
4. Перейдіть до Security → App passwords
5. Створіть новий App Password для "Mail"
6. Скопіюйте згенерований пароль (16 символів)

### 2. Оновити .env.local файл

Замініть placeholder пароль в файлі `.env.local`:

```env
EMAIL_USER=alien.token.workspace@gmail.com
EMAIL_PASS=ваш_16_символьний_пароль_тут
```

**Важно:** Замените `ваш_16_символьный_пароль_тут` на реальный App Password от Gmail

### 3. Перезапустіть сервер розробки

```bash
npm run dev
```

### 4. Тестування

1. Відкрийте форму контакту на сайті
2. Заповніть всі поля
3. Натисніть "Send Message"
4. Перевірте пошту alien.token.workspace@gmail.com

### 5. Диагностика проблем

Если письма все еще не приходят, проверьте:

1. **Правильность App Password:**

   ```bash
   curl -X GET http://localhost:3000/api/test-email
   ```

2. **Тест отправки:**

   ```bash
   curl -X POST http://localhost:3000/api/send-email-simple \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"User","email":"test@example.com","subject":"Test","message":"Test message"}'
   ```

3. **Проверьте логи сервера** - они покажут детальную информацию об ошибках

### Важливо

- НЕ використовуйте звичайний пароль від Gmail
- Використовуйте ТІЛЬКИ App Password
- НЕ комітьте .env.local файл в git
- App Password виглядає як: abcd efgh ijkl mnop
- App Password НЕ содержит пробелов

### Структура email

Кожне повідомлення буде містити:

- Ім'я та прізвище
- Email адресу
- Тему
- Повідомлення
- Красиве HTML форматування

### Альтернативное решение

Если настройка Gmail не работает, форма автоматически откроет ваш почтовый клиент с предзаполненным письмом.
