export default function App() {
  const pages = {
    tarefas: 'Tarefas',
    materias: 'Matérias',
    cronograma: 'Cronograma',
    provas: 'Provas',
    foco: 'Modo Foco',
    exportar: 'Exportar PDF'
  };

  let active = 'tarefas';

  const render = () => {
    document.getElementById('conteudo').innerHTML = `<h2>${pages[active]}</h2><p>Conteúdo da página de ${pages[active]}.</p>`;
  };

  window.setPage = (p) => {
    active = p;
    render();
  };

  return `
    <div style="font-family:sans-serif">
      <header style="background:#0047ab;color:white;padding:1rem;text-align:center">
        <h1>UniFlow</h1>
      </header>
      <nav style="display:flex;justify-content:space-around;background:#eee;padding:0.5rem">
        ${Object.entries(pages).map(([k, v]) => `<button onclick="setPage('${k}')">${v}</button>`).join('')}
      </nav>
      <main id="conteudo" style="padding:1rem"></main>
      <script>(${render.toString()})();</script>
    </div>
  `;
}