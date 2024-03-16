<template>
    <div>
        <table
            ref="myTable"
            class="table table-striped table-bordered"
            style="width: 100%"
        >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Completed at</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td  
                        :class="[item.completed ? 'completed' : '', 'itemText']"
                    >
                        {{ item.name }}
                    </td>
                    <td>{{ item.completed_at }}</td>
                    <td>
                        <list-item
                            :item="item"
                            :checked="item.completed" 
                            @itemchanged="$emit('reloadlist')"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs4"; // Using Bootstrap 4 theme
import listItem from "./listItem";
 
import ListItem from './listItem.vue'
 
export default {
    props: ["items"],
    components: {
        listItem,
    },
    mounted() {
        // Log the items prop to verify data
        console.log("Items prop received by component:", this.items);

        // Initialize DataTable when component is mounted
        this.$nextTick(() => {
            console.log("Initializing DataTable...");
            this.initializeDataTable();
        });
    },
    methods: {
        initializeDataTable() {
            if (!$.fn.DataTable.isDataTable(this.$refs.myTable)) {
                const dataTable = $(this.$refs.myTable).DataTable({
                    paging: true,
                    searching: true,
                    ordering: true,
                    info: true,
                    responsive: true,
                    order: [[1, "desc"]],
                });
                console.log("DataTable initialized:", dataTable);
            } else {
                console.log("DataTable already initialized.");
            }
        },
    },
    watch: {
        // Watch for changes to the 'items' prop
        items(newValue, oldValue) {
            console.log("Items prop changed:", newValue);
            // Re-initialize DataTable when 'items' prop changes
            this.initializeDataTable();
        },
    },
};
</script>

<style scoped>
/* Adjust table styling */
.table {
    font-size: 14px;
}

/* Remove border styles as Bootstrap classes will handle them */

/* Adjust DataTable search input width */
table.dataTable .dataTables_filter input {
    width: 100%; /* Set width to fill the entire space */
    max-width: 300px; /* Set maximum width */
}

/* Adjust DataTable pagination button padding */
.dataTables_paginate .paginate_button {
    padding: 6px 12px;
}

/* Style for completed tasks */
.completed {
    text-decoration: line-through;
    color: #99999;
}
</style>
