const infoRows = [
  { label: "CDU", value: "000" },
  { label: "CDD", value: "000" },
  { label: "Idioma", value: "Português" },
  { label: "Tipo", value: "Trabalho acadêmico" },
];

const fieldSets = [
  {
    title: "Dados da Obra",
    description:
      "Informações bibliográficas principais usadas para compor a ficha.",
    fields: [
      { id: "titulo", label: "Título", placeholder: "Título completo da obra" },
      {
        id: "subtitulo",
        label: "Subtítulo",
        placeholder: "Subtítulo (se houver)",
      },
      {
        id: "ano",
        label: "Ano",
        placeholder: "Ex.: 2026",
      },
    ],
  },
  {
    title: "Autoria",
    description: "Dados de autoria e orientação.",
    fields: [
      { id: "autor", label: "Autor(a)", placeholder: "Nome completo" },
      { id: "orientador", label: "Orientador(a)", placeholder: "Nome completo" },
      {
        id: "coorientador",
        label: "Coorientador(a)",
        placeholder: "Opcional",
      },
    ],
  },
  {
    title: "Instituição",
    description: "Local de desenvolvimento do trabalho.",
    fields: [
      { id: "instituicao", label: "Instituição", placeholder: "Universidade" },
      {
        id: "programa",
        label: "Programa / Curso",
        placeholder: "Ex.: Sistemas de Informação",
      },
      { id: "cidade", label: "Cidade", placeholder: "Ex.: Parnaíba" },
    ],
  },
  {
    title: "Dados Complementares",
    description: "Detalhes adicionais usados na catalogação.",
    fields: [
      { id: "paginacao", label: "Paginação", placeholder: "Ex.: 120 f." },
      {
        id: "palavras-chave",
        label: "Palavras-chave",
        placeholder: "Separe por ponto e vírgula",
      },
      {
        id: "natureza",
        label: "Natureza do Trabalho",
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
    <div className="min-h-screen bg-[#f7f2ea] text-[#1f1c18]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#efe4d4,transparent_60%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#d3a86b]/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#8b6b4a]/25 blur-3xl" />
        <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 sm:px-10">
          <HeaderSection />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <section className="rounded-3xl border border-[#e3d5c3] bg-white/80 p-6 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.6)] backdrop-blur sm:p-10">
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
      <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d7c4ab] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#6b4f2d]">
        FICAT · Gerador de ficha catalográfica
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-[#2d241a] sm:text-5xl">
          Crie fichas catalográficas consistentes em poucos minutos.
        </h1>
        <p className="max-w-2xl text-base text-[#5a4a3b] sm:text-lg">
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
    <div className="rounded-2xl border border-[#e5d4c1] bg-white/70 p-4 shadow-[0_16px_40px_-40px_rgba(0,0,0,0.7)]">
      <p className="text-xs uppercase tracking-[0.2em] text-[#7a6246]">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-[#2d241a]">{value}</p>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-[#2d241a]">
        Dados para a ficha
      </h2>
      <p className="text-sm text-[#6b5b4b]">
        Campos obrigatórios devem ser preenchidos para gerar a ficha
        catalográfica final.
      </p>
    </div>
  );
}

interface FieldSetProps {
  title: string;
  description: string;
  fields: Array<{
    id: string;
    label: string;
    placeholder: string;
  }>;
}

function FieldSet({ title, description, fields }: FieldSetProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-[#2d241a]">{title}</h3>
        <p className="text-sm text-[#6b5b4b]">{description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-[#473828]">{field.label}</span>
            <input
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              className="h-11 rounded-2xl border border-[#e0d1be] bg-white px-4 text-sm text-[#2d241a] outline-none transition focus:border-[#a0763c] focus:ring-2 focus:ring-[#e2c08b]"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        className="h-11 rounded-full bg-[#2d241a] px-6 text-sm font-semibold text-[#f9f4ee] transition hover:bg-[#1f1812]"
        type="button"
      >
        Gerar ficha
      </button>
      <button
        className="h-11 rounded-full border border-[#d7c4ab] bg-white px-6 text-sm font-semibold text-[#2d241a] transition hover:border-[#2d241a]"
        type="button"
      >
        Exportar PDF
      </button>
      <span className="text-xs text-[#6b5b4b]">
        A prévia é atualizada conforme os dados informados.
      </span>
    </div>
  );
}

function PreviewCard() {
  return (
    <section className="rounded-3xl border border-[#e6d7c5] bg-[#fff7ec] p-6 shadow-[0_24px_60px_-55px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#2d241a]">Prévia da ficha</h2>
        <span className="rounded-full border border-[#d7c4ab] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#6b4f2d]">
          Draft
        </span>
      </div>
      <div className="mt-6 space-y-3 rounded-2xl border border-[#d6c2ab] bg-white p-5 text-sm text-[#3d2f22] shadow-inner">
        {previewLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-xs text-[#6b5b4b]">
        <span className="rounded-full bg-[#ead8c0] px-3 py-1">
          Revisar antes de exportar
        </span>
        <span className="rounded-full bg-[#ead8c0] px-3 py-1">
          Padrão ABNT
        </span>
      </div>
    </section>
  );
}

function InfoCard() {
  return (
    <section className="rounded-3xl border border-[#e3d5c3] bg-white/80 p-6 shadow-[0_18px_50px_-40px_rgba(0,0,0,0.6)]">
      <h3 className="text-lg font-semibold text-[#2d241a]">
        Checklist rápido
      </h3>
      <div className="mt-4 flex flex-col gap-3 text-sm text-[#5a4a3b]">
        <InfoRow label="Campos obrigatórios" value="Título, autor, ano" />
        <InfoRow label="Saída" value="PDF pronto para impressão" />
        <InfoRow label="Atualização" value="Validação automática" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {infoRows.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#e5d4c1] bg-[#fdf6ee] p-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#7a6246]">
              {item.label}
            </p>
            <p className="mt-2 text-base font-semibold text-[#2d241a]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-[#e5d4c1] bg-[#f7efe6] p-4 text-xs text-[#6b5b4b]">
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
    <div className="flex items-center justify-between gap-4 border-b border-[#ead9c6] pb-3 last:border-b-0 last:pb-0">
      <span className="font-medium text-[#3b2f24]">{label}</span>
      <span className="text-right text-[#6b5b4b]">{value}</span>
    </div>
  );
}
