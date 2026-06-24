import { Container } from '../../components/Container'
import { GenericHtml } from '../../components/GenericHtml'
import { Heading } from '../../components/Heading'

import { MainTemplate } from '../../templates/MainTemplate'

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>
            404 - Página não encontrada 🚀
          </Heading>

          <p>
            Opa! Parece que a página que você está
            tentando acessar não existe.
            Talvez ela tenha tirado férias,
            resolvido explorar o universo ou se
            perdido em algum lugar entre dois
            buracos negros. 🌌
          </p>

          <p>
            Mas calma, você não está perdido no
            espaço (ainda). Dá pra voltar em
            segurança para a
            {' '}
            <a href="/">
              página principal
            </a>
            {' '}
            ou
            {' '}
            <a href="/history">
              para o histórico
            </a>
            .
          </p>

          <p>
            Se você acha que essa página deveria
            existir, entre em contato.
          </p>

          <p>
            Enquanto isso, fica aqui uma reflexão:
            "Se uma página não existe na internet,
            será que ela existiu de verdade?"
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  )
}