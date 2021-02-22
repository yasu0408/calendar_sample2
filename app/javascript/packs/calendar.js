document.addEventListener("turbolinks:load", () => {
  flatpickr.localize(flatpickr.l10ns.ja)


  const config = {
    inline: true,
    disableMobile: true
  }
  flatpickr('#edit_calendar', config);

});