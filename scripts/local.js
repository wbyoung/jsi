$(function() {
  $('h1, h2, h3, h4, h5, h6').each(function() {
    $this = $(this);
    if (!$this.attr('id')) {
      var name = $this.text().toLowerCase().replace(/[^\w]+/gi, '_');
      var icon = $('<i/>').addClass('fa fa-link');
      var anchor = $('<a/>').addClass('section-reference').attr('href', '#' + name);
      anchor.append(icon);
      $this.attr('id', name);
      $this.prepend(anchor);
    }
  });
});
