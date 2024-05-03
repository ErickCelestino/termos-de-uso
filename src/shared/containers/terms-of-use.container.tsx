import { Typography } from '@mui/material'
import { BaseLayout } from '../layout'

export const TermsOfUserContainer = () => {
    return (
        <BaseLayout title='Termos de Uso' pages={[{page: 'Contato', to: 'contact'}]}>
        <Typography># Política de Privacidade para [Nome do Seu Jogo]

## 1. Introdução

Obrigado por escolher [Nome do Seu Jogo] ("nós", "nos", "nosso"). Nós nos comprometemos a proteger a privacidade dos usuários do nosso jogo. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você joga [Nome do Seu Jogo].

Nós nos reservamos o direito de fazer alterações a esta Política de Privacidade a qualquer momento e por qualquer motivo. Iremos alertá-lo sobre quaisquer alterações, publicando a "data da última atualização" desta Política de Privacidade. Você é encorajado a revisar periodicamente esta Política de Privacidade para se manter informado de atualizações.

## 2. Coleta de suas informações

Podemos coletar informações sobre você de várias maneiras. Os dados podem incluir o seguinte:

### 2.1 Dados de Uso

As informações coletadas automaticamente quando você joga o jogo podem incluir seu dispositivo móvel e detalhes de uso, incluindo informações sobre suas visitas ao jogo, incluindo o conteúdo visualizado, os recursos que você acessou, as ações no jogo, a data e hora de sua visita, o tempo gasto no jogo e outras informações de estatísticas.

## 3. Uso de suas informações

Ter acesso às suas informações nos permite oferecer a você o [Nome do Seu Jogo] e melhorar a experiência do usuário. Usamos suas informações para:

- Melhorar, personalizar e expandir o nosso jogo
- Compreender e analisar a utilização do nosso jogo
- Desenvolver novos produtos, serviços, características e funcionalidades

## 4. Política de Anúncios

Usamos anúncios para financiar o [Nome do Seu Jogo] e torná-lo gratuito para você. Trabalhamos com parceiros de publicidade que coletam informações para fornecer anúncios personalizados de acordo com seus interesses.

## 5. Contatos

Se você tiver alguma dúvida ou comentário sobre esta Política de Privacidade, entre em contato conosco em: [Seu endereço de e-mail]
</Typography>
        </BaseLayout>
    )
}