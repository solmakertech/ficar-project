const infoRows = [
  { label: "CDU", value: "000" },
  { label: "CDD", value: "000" },
  { label: "Idioma", value: "Português" },
  { label: "Tipo", value: "Trabalho acadêmico" },
];

type Field =
  | { id: string; label: string; type: "text"; placeholder?: string; required?: boolean }
  | { id: string; label: string; type: "select"; options: { value: string; label: string }[]; required?: boolean }
  | { id: string; label: string; type: "checkbox" };

const titulacaoOptions = [
  { value: "", label: "- Selecione -" },
  { value: "graduado", label: "Graduado" },
  { value: "especialista", label: "Especialista" },
  { value: "mestre", label: "Mestre" },
  { value: "doutor", label: "Doutor" },
];

const fieldSets: { title: string; description: string; fields: Field[] }[] = [
  {
    title: "Dados da Obra",
    description:
      "Informações bibliográficas principais usadas para compor a ficha.",
    fields: [
      { id: "titulo", label: "Título", type: "text", placeholder: "Título completo da obra", required: true },
      {
        id: "subtitulo",
        label: "Subtítulo",
        type: "text",
        placeholder: "Subtítulo (se houver)",
      },
      {
        id: "ano",
        label: "Ano",
        type: "text",
        placeholder: "Ex.: 2026",
      },
    ],
  },
  {
    title: "Autoria",
    description: "Dados de autoria e orientação.",
    fields: [
      { id: "autor", label: "Nome do Autor", type: "text", placeholder: "Ex.: João Henrique Rabelo", required: true },
      { id: "sobrenome", label: "Sobrenome do Autor", type: "text", placeholder: "Ex.: Barbosa", required: true },
      { id: "nome_coaut", label: "Nome do 2º autor", type: "text", placeholder: "Ex.: Caio Shimada" },
      { id: "sobrenome_coaut", label: "Sobrenome do 2º autor", type: "text", placeholder: "Ex.: Rabello" },
      { id: "nome_ori", label: "Nome do Orientador", type: "text", placeholder: "Ex.: Paulo Victor Lobato", required: true },
      { id: "sobrenome_ori", label: "Sobrenome do Orientador", type: "text", placeholder: "Ex.: Sarmento", required: true },
      { id: "orientadora", label: "Orientadora", type: "checkbox" },
      { id: "titulacaoorientador", label: "Titulação do Orientador", type: "select", options: titulacaoOptions, required: true },
      { id: "nome_coori", label: "Nome do Coorientador", type: "text", placeholder: "Ex.: Bruno Santos Sousa" },
      { id: "coorientadora", label: "Coorientadora", type: "checkbox" },
      { id: "titulacaocoorientador", label: "Titulação do Coorientador", type: "select", options: titulacaoOptions },
    ],
  },
  {
    title: "Instituição",
    description: "Local de desenvolvimento do trabalho.",
    fields: [
      { id: "instituicao", label: "Instituição", type: "text", placeholder: "Universidade" },
      {
        id: "programa",
        label: "Programa / Curso",
        type: "text",
        placeholder: "Ex.: Sistemas de Informação",
      },
      { id: "cidade", label: "Cidade", type: "text", placeholder: "Ex.: Parnaíba" },
    ],
  },
  {
    title: "Dados Complementares",
    description: "Detalhes adicionais usados na catalogação.",
    fields: [
      { id: "paginacao", label: "Paginação", type: "text", placeholder: "Ex.: 120 f." },
      {
        id: "palavras-chave",
        label: "Palavras-chave",
        type: "text",
        placeholder: "Separe por ponto e vírgula",
      },
      {
        id: "natureza",
        label: "Natureza do Trabalho",
        type: "text",
        placeholder: "TCC, dissertação, tese...",
      },
    ],
  },
];

const previewLines = [
  "Silva, Ana Maria.",
  "Título da obra : subtítulo / Ana Maria Silva. — Parnaíba, 2026.",
  "120 f. : il. color.",
  "Orientador: Prof. Dr. João Souza.",
  "Dissertação (Mestrado) — Universidade X, Programa Y, 2026.",
  "1. Catalogação. 2. Biblioteconomia. I. Souza, João. II. Título.",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-canvas text-ink-deep">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-gradient-top),transparent_60%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent-bright/25 blur-3xl" />
        <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 sm:px-10">
          <HeaderSection />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <section className="rounded-3xl border border-hairline bg-surface/80 p-6 shadow-card backdrop-blur sm:p-10">
              <FormHeader />
              <form className="mt-10 flex flex-col gap-10">
                {fieldSets.map((fieldSet) => (
                  <FieldSet key={fieldSet.title} {...fieldSet} />
                ))}
                <Actions />
              </form>
            </section>
            <aside className="flex flex-col gap-8">
              <PreviewCard />
              <InfoCard />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <header className="flex flex-col gap-6">
      <div className="inline-flex w-fit items-center gap-3 rounded-full border border-hairline-medium bg-surface/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink-tag">
        FICAT · Gerador de ficha catalográfica
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Crie fichas catalográficas consistentes em poucos minutos.
        </h1>
        <p className="max-w-2xl text-base text-ink-secondary sm:text-lg">
          Preencha os campos abaixo, revise a prévia e exporte quando estiver
          pronto. O objetivo é manter padronização bibliográfica em toda a
          instituição.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard label="Tempo médio" value="4 min" />
        <MetricCard label="Campos essenciais" value="12" />
        <MetricCard label="Formato" value="ABNT" />
      </div>
    </header>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
}

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-hairline-soft bg-surface/70 p-4 shadow-card-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-subtle">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-ink">{value}</p>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-ink">
        Dados para a ficha
      </h2>
      <p className="text-sm text-ink-muted">
        Campos obrigatórios devem ser preenchidos para gerar a ficha
        catalográfica final.
      </p>
    </div>
  );
}

interface FieldSetProps {
  title: string;
  description: string;
  fields: Field[];
}

const inputClass = "h-11 rounded-2xl border border-hairline-strong bg-surface px-4 text-sm text-ink outline-none transition focus:border-accent-deep focus:ring-2 focus:ring-accent-ring w-full";

function FieldSet({ title, description, fields }: FieldSetProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm text-ink-muted">{description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          if (field.type === "checkbox") {
            return (
              <label key={field.id} className="flex h-11 cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  id={field.id}
                  name={field.id}
                  className="h-4 w-4 accent-accent-deep"
                />
                <span className="font-medium text-ink-label">{field.label}</span>
              </label>
            );
          }
          if (field.type === "select") {
            return (
              <label key={field.id} className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink-label">
                  {field.label}
                  {field.required && <span className="ml-1 text-accent-deep">*</span>}
                </span>
                <select id={field.id} name={field.id} className={inputClass}>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            );
          }
          return (
            <label key={field.id} className="flex flex-col gap-2 text-sm">
              <span className="font-medium text-ink-label">
                {field.label}
                {field.required && <span className="ml-1 text-accent-deep">*</span>}
              </span>
              <input
                id={field.id}
                name={field.id}
                type="text"
                placeholder={field.placeholder}
                className={inputClass}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        className="h-11 rounded-full bg-button-primary px-6 text-sm font-semibold text-button-primary-text transition hover:bg-button-primary-hover"
        type="button"
      >
        Gerar ficha
      </button>
      <button
        className="h-11 rounded-full border border-hairline-medium bg-surface px-6 text-sm font-semibold text-ink transition hover:border-ink"
        type="button"
      >
        Exportar PDF
      </button>
      <span className="text-xs text-ink-muted">
        A prévia é atualizada conforme os dados informados.
      </span>
    </div>
  );
}

function PreviewCard() {
  return (
    <section className="rounded-3xl border border-hairline bg-surface-warm p-6 shadow-card-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">Prévia da ficha</h2>
        <span className="rounded-full border border-hairline-medium px-3 py-1 text-xs uppercase tracking-[0.25em] text-ink-tag">
          Draft
        </span>
      </div>
      <div className="mt-6 space-y-3 rounded-2xl border border-preview-border bg-surface p-5 text-sm text-ink-label shadow-inner">
        {previewLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink-muted">
        <span className="rounded-full bg-badge px-3 py-1">
          Revisar antes de exportar
        </span>
        <span className="rounded-full bg-badge px-3 py-1">
          Padrão ABNT
        </span>
      </div>
    </section>
  );
}

function InfoCard() {
  return (
    <section className="rounded-3xl border border-hairline bg-surface/80 p-6 shadow-card-lg">
      <h3 className="text-lg font-semibold text-ink">
        Checklist rápido
      </h3>
      <div className="mt-4 flex flex-col gap-3 text-sm text-ink-secondary">
        <InfoRow label="Campos obrigatórios" value="Título, autor, ano" />
        <InfoRow label="Saída" value="PDF pronto para impressão" />
        <InfoRow label="Atualização" value="Validação automática" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {infoRows.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-hairline-soft bg-surface-alt p-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-ink-subtle">
              {item.label}
            </p>
            <p className="mt-2 text-base font-semibold text-ink">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-hairline-soft bg-surface-soft p-4 text-xs text-ink-muted">
        Dica: mantenha as palavras-chave separadas por ponto e vírgula.
      </div>
    </section>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-hairline-divider pb-3 last:border-b-0 last:pb-0">
      <span className="font-medium text-ink-label">{label}</span>
      <span className="text-right text-ink-muted">{value}</span>
    </div>
  );
}
