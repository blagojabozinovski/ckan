this.ckan.module('tabledesigner_datatables_buttons', function($, _) {
  return {
    initialize: function() {
      var $defn = $(this);
      var editText = $defn.data('edit-text');

      $.fn.dataTable.ext.buttons.edit = {
        className: 'buttons-edit',
        action: function (e, dt, node, config) {
          alert( this.text() );
        }
      };

      const table = $('#dtprv').DataTable();
      table.button().add(0, {
        extend: "selected",
        text: editText,
        action: function ( e, dt, button, config ){
          alert(e);
//          var form = $('<form>',{
//            action : "{% url_for 'recombinant_template', dataset_type=dataset_type, lang=h.lang(),owner_org=owner_org %}",
//            method : "post"
//          });
//
//          form.append($('<input>').attr({
//            type: 'hidden',
//            value: "{{resource_name}}",
//            name: 'resource_name'
//          }));
//
//          form.append($('<input>').attr({
//            type: 'hidden',
//            value: {{primary_keys}},
//          name: 'key_indices'
//        }));
//
//          var pk_cols = {{primary_keys}}.map( function(value) {
//            return value + {{offset}};
//          } );
//
//          let rows = dt.rows( { selected: true } );
//          rows.eq(0).each( function ( index ) {
//
//            form.append($('<input>').attr({
//              type: 'hidden',
//              value: dt.cells( index, pk_cols ).data().toArray(),
//              name: 'bulk-template'
//            }));
//          } );
//
//          form.appendTo('body').submit();
        }
      });
    }
  }
});
