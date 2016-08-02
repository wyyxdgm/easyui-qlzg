$(function() {
	$('#target').datagrid({
        title: 'target',
        url: '/api',/*获取列表的url*/
        width: '250',
        rownumbers: true,
        columns: [
            [{
                field: 'ck',
                checkbox: true
            }, {
                field: 'productid',
                title: 'productid'
            }, {
                field: 'productname',
                title: 'productname'
            }]
        ],
        singleSelect: false,
        selectOnCheck: true,
        checkOnSelect: true,
        onUncheck: function(rowIndex, rowData) {
            //post unbind
            console.log(rowIndex, rowData);
            $('#target').datagrid('reload');
            $('#source').datagrid('reload');
        },
        onUncheckAll: function(rowIndex, rowData) {
            //post unbind
            console.log(rowIndex, rowData);
            $('#target').datagrid('reload');
            $('#source').datagrid('reload');
        }
    });
    $('#source').datagrid({
        title: 'source',
        url: '/api',
        width: '250',
        rownumbers: true,
        columns: [
            [{
                field: 'ck',
                checkbox: true
            }, {
                field: 'productid',
                title: 'productid'
            }, {
                field: 'productname',
                title: 'productname'
            }]
        ],
        singleSelect: false,
        selectOnCheck: true,
        checkOnSelect: true,
        onCheck: function(rowIndex, rowData) {
            //post bind
            console.log(rowIndex, rowData);
            $('#target').datagrid('reload');
            $('#source').datagrid('reload');
        },
        onCheckAll: function(rowIndex, rowData) {
            //post bind
            console.log(rowIndex, rowData);
            $('#target').datagrid('reload');
            $('#source').datagrid('reload');
        }
    });
});