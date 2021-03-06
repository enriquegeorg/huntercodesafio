// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pedidosbouthin$1.0.0/src/app/views/vagas/lista/view.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/huntercodesafio.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-cabecalho.png\" alt=\"Hunter Co\" height=\"35px\" width=\"auto\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>Visualização de Vaga</h1><div class=\"form-group\"><label for=\"job_type\">Nome da vaga:</label><input disabled type=\"text\" id=\"job_type\" name=\"job_type\" value=\"" +
    marko_escapeXmlAttr(data.vaga.job_type) +
    "\" placeholder=\"coloque o nome da vaga\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"client_id\">Nome do cliente:</label><input disabled type=\"text\" id=\"client_id\" name=\"client_id\" value=\"" +
    marko_escapeXmlAttr(data.vaga.client_id) +
    "\" placeholder=\"coloque o nome do cliente\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"candidate\">Nome do candidato:</label><input disabled type=\"text\" id=\"candidate\" name=\"candidate\" value=\"" +
    marko_escapeXmlAttr(data.vaga.candidate) +
    "\" placeholder=\"coloque o nome do candidato\" class=\"form-control\"></div><div class=\"form-group\">");

  if (data.vaga.value > 0) 

  { 

  out.w("<label for=\"value\">Valor:</label><input type=\"text\" id=\"value\" name=\"value\" value=\"" +
    marko_escapeXmlAttr(data.vaga.value) +
    "\" placeholder=\"150.25\" class=\"form-control\">");

  } else { 

  out.w("<label for=\"value\">Valor Perdido:</label><input disabled type=\"text\" id=\"lost_value\" name=\"lost_value\" value=\"" +
    marko_escapeXmlAttr(data.vaga.lost_value) +
    "\" placeholder=\"150.25\" class=\"form-control\">");

  } 

  out.w("</div><div class=\"form-group\"><label for=\"refund_reason\">Motivo da perda:</label><textarea disabled cols=\"20\" rows=\"10\" id=\"refund_reason\" name=\"refund_reason\" placeholder=\"descreva o motivo da perda\" class=\"form-control\">" +
    marko_escapeXml(data.vaga.refund_reason) +
    "</textarea></div><div class=\"form-group\"><label for=\"billed_by\">Nome de quem gerou a cobrança:</label><input disabled type=\"text\" id=\"billed_by\" name=\"billed_by\" value=\"" +
    marko_escapeXmlAttr(data.vaga.billed_by) +
    "\" placeholder=\"nome de quem gerou a cobranca\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"eventtype\">Tipo de evento:</label>");

  if (data.vaga.eventtype == "CANDIDATE_SENT") 

  { 

  out.w("<input disabled type=\"text\" id=\"eventtype\" name=\"eventtype\" value=\"Candidato Enviado\" placeholder=\"tipo do evento\" class=\"form-control\">");

  } else { 

  out.w("<input disabled type=\"text\" id=\"eventtype\" name=\"eventtype\" value=\"Candidato Contratado\" placeholder=\"tipo do evento\" class=\"form-control\">");

  } 

  out.w("</div><br><input type=\"submit\" value=\"Editar\" onclick=\"window.location='/vagas/form/" +
    marko_escapeXmlAttr(data.vaga.id) +
    "';\"> </div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-rodape.png\" class=\"logo-rodape\"></h1></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"https://www.facebook.com/huntercofanpage/\" class=\"compartilhar-facebook\" target=\"_blank\">/HunterCoFanPage</a></li><li><a href=\"https://www.linkedin.com/company/hunterco/\" class=\"compartilhar-linkedin\" target=\"_blank\">/HunterCo</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "57");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/pedidosbouthin$1.0.0/src/app/views/vagas/lista/view.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
