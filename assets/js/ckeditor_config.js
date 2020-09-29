CKEDITOR.editorConfig = function (config) {
  config.toolbar = [{
      name: "clipboard",
      items: ["Copy", "Cut", "Paste", "PasteText", "-", "Undo", "Redo"]
    },
    {
      name: "basicstyles",
      items: ["Bold", "Italic", "Underline"]
    },
    {
      name: "paragraph",
      items: [
        "NumberedList",
        "BulletedList",
        "-",
        "Outdent",
        "Indent",
        "-",
        "Blockquote",
        "-",
        "JustifyLeft",
        "JustifyCenter",
        "JustifyRight",
        "JustifyBlock",
        "-",
        "BidiLtr",
        "BidiRtl",
        "Language"
      ]
    },
    "/",
    {
      name: "styles",
      items: ["Styles", "Format", "Font", "FontSize"]
    },
    {
      name: "colors",
      items: ["TextColor", "BGColor"]
    },
    {
      name: "links",
      items: ["Link", "Unlink", "Anchor"]
    },
    {
      name: "insert",
      items: ["Table", "HorizontalRule", "Smiley", "SpecialChar"]
    }
  ];
  config.forcePasteAsPlainText = true;
  config.defaultLanguage = 'en';
  config.contentsLangDirection = 'ltr';
  config.contentsLanguage = 'en';
  config.fillEmptyBlocks = false;
  config.tabSpaces = 0;
  config.forcePasteAsPlainText = true;

};
CKEDITOR.on('instanceReady', function (ev) {
  //catch ctrl+clicks on <a>'s in edit mode to open hrefs in new tab/window
  $('iframe').contents().click(function (e) {
    if (typeof e.target.href != 'undefined' && e.ctrlKey == true) {
      window.open(e.target.href, 'new' + e.screenX);
    }
  });
});