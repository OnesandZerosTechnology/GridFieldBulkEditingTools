if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('pl', {
    "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO": "Wgrywanie %s plików. Ukończono %s. %s błędów.",
    "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT": "Musisz wybrać przynajmniej jedną pozycję.",
    "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Dane zostaną bezpowrotnie usunięte. Czy chcesz kontynuować?"
});
}