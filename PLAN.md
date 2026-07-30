# FICAT — Plano de Desenvolvimento

## Fase 1 — Formulário Completo + Prévia ao Vivo

- [x] Adicionar todos os campos do original (autor/sobrenome, 2º autor, orientador/coorientador com titulação e gênero)
- [ ] Estado React (`useState`) para todos os campos
- [ ] Prévia dinâmica atualizando em tempo real
- [ ] Validação de campos obrigatórios com feedback visual
- [ ] Adicionar select de unidade acadêmica, tipo de trabalho, curso (dependente do tipo)
- [ ] Adicionar área do conhecimento (CDD), palavras-chave (1-5), fonte (Times/Arial), ano, paginação, ilustração
- [ ] reCAPTCHA (opcional, pode pular)

## Fase 2 — Motor de Formatação ABNT + Código PHA

- [ ] Portar lógica de normalização de nomes (stopwords: de/do/da/dos/das)
- [ ] Formatar autor: `SOBRENOME, Nome`
- [ ] Formatar título: `Título : subtítulo / Autor. — Ano.`
- [ ] Formatar descrição física: `xxi, 70 f. : il. color.`
- [ ] Formatar orientador: `Prof. Dr. Nome` / `Profª. Dra. Nome`
- [ ] Formatar notas: `Tese (Doutorado) - Curso, Unidade, UFPA, Cidade, Ano.`
- [ ] Mapeamento sigla unidade → campus/cidade
- [ ] Formatar palavras-chave: `1. Assunto. 2. Assunto. I. Título.`
- [ ] Código PHA (Cutter-Sanborn): lookup na tabela `pha.txt`
- [ ] Incluir CDD no rodapé da ficha

## Fase 3 — Exportação PDF

- [ ] Estilo `@media print` para impressão A4
- [ ] Botão "Exportar PDF" usando `window.print()` ou jsPDF
- [ ] Layout da ficha: margens, fonte selecionável (Times/Arial), tamanho 10pt
- [ ] Cabeçalho CIP: "Dados Internacionais de Catalogação na Publicação..."

## Fase 4 — API + Banco de Dados

- [ ] Migrar schema SQL → Prisma (unidadesacademicas, cursos, areaconhecimento, registros, elaboradores)
- [ ] Criar módulo FichaCatalografica no NestJS (controller, service, DTO)
- [ ] Endpoints: `POST /fichas`, `GET /fichas`, `GET /fichas/:id`
- [ ] Endpoints auxiliares: `GET /unidades`, `GET /cursos/:nivel/:unidade`, `GET /areas-conhecimento`
- [ ] Conectar frontend à API

## Fase 5 — Árvore CDD + Seleção de Curso

- [ ] Portar `areadoconhecimento.php` para componente React (navegação por categoria CDD)
- [ ] Modal de busca de área do conhecimento com filtro
- [ ] Select de curso dependente da unidade acadêmica + tipo de trabalho
- [ ] Carregar dados CDD do banco via API

## Fase 6 — Estatísticas + Contato + Polimento

- [ ] Portar `ficatstatistics` (gráficos de uso, relatórios)
- [ ] Formulário "Fale Conosco" (email)
- [ ] Atualizar metadata (title/description/lang do HTML)
- [ ] Loading states, toast de feedback, error handling
- [ ] Dark mode (opcional)
