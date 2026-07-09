# services

Camada de abstração entre os componentes e o Supabase. Nenhum componente deve chamar o cliente Supabase diretamente — toda comunicação passa por um service (`auth.service`, `blog.service`, `contact.service`, `lead.service`, `newsletter.service`, `meeting.service`, `upload.service`, `settings.service`). Isso mantém a aplicação preparada para uma futura troca de backend.
