(function () {
  var C = window.LAVENTA || {};
  var $ = function (s) { return document.querySelector(s); };

  $("#ano").textContent = new Date().getFullYear();
  if (C.cnpj) $("#cnpj").textContent = " — CNPJ " + C.cnpj;

  // menu mobile
  var btn = $(".menu-btn"), menu = $("#menu");
  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { menu.classList.remove("aberto"); btn.setAttribute("aria-expanded", false); }
  });

  // links do rodapé e botão flutuante
  var links = $("#rodape-links"), html = [];
  var zapDigits = (C.whatsapp || "").replace(/\D/g, "");
  if (zapDigits) {
    html.push('<a href="https://wa.me/' + zapDigits + '" target="_blank" rel="noopener">WhatsApp</a>');
    var f = $("#zap-flutuante");
    f.href = "https://wa.me/" + zapDigits + "?text=" + encodeURIComponent("Olá! Vim pelo site do La Venta Market.");
    f.target = "_blank"; f.rel = "noopener"; f.hidden = false;
  }
  if (C.email) html.push('<a href="mailto:' + C.email + '">' + C.email + '</a>');
  if (C.instagram) html.push('<a href="https://instagram.com/' + C.instagram.replace("@", "") + '" target="_blank" rel="noopener">Instagram</a>');
  links.innerHTML = html.join("");

  // formulário
  var form = $("#form"), aviso = $("#aviso");
  function msg(t, ok) { aviso.textContent = t; aviso.className = "aviso" + (ok ? " ok" : ""); }

  form.addEventListener("click", function (e) {
    var canal = e.target.getAttribute && e.target.getAttribute("data-canal");
    if (!canal) return;

    var d = new FormData(form);
    var nome = (d.get("nome") || "").trim(), texto = (d.get("mensagem") || "").trim();
    if (!nome || !texto) { msg("Preencha seu nome e a mensagem."); return; }

    var corpo = "Olá! Meu nome é " + nome + "." +
      "\nPerfil: " + d.get("perfil") +
      (d.get("condominio").trim() ? "\nCondomínio/cidade: " + d.get("condominio").trim() : "") +
      "\n\n" + texto;

    if (canal === "whatsapp") {
      if (!zapDigits) { msg("O WhatsApp ainda não está disponível. Tente por e-mail em breve."); return; }
      window.open("https://wa.me/" + zapDigits + "?text=" + encodeURIComponent(corpo), "_blank", "noopener");
    } else {
      if (!C.email) { msg("O e-mail ainda não está disponível. Tente pelo WhatsApp em breve."); return; }
      location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Contato pelo site — " + nome) + "&body=" + encodeURIComponent(corpo);
    }
    msg("Abrindo o aplicativo para enviar sua mensagem…", true);
  });
})();
