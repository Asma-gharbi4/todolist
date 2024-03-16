<template>
    <div class="item">
        <table class="table table-bordered">
            <tr>
                <td>
                    <input type="checkbox"
                           @change="updateCheck()" 
                           :checked="item.completed" 
                           v-model="item.completed" />
                </td>
                <td>
                    <span :class="[item.completed ? 'completed' : '', 'itemText']"> </span>
                </td>
                <td>
                    <button @click="removeItem()" class="trashcan">
                        <font-awesome-icon icon="trash" />
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['item'],
    methods: {
        updateCheck() {
            axios.put('api/item/' + this.item.id, {
                item: this.item
            })
            .then(response => {
                if (response.status === 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        removeItem() {
            axios.delete('api/item/' + this.item.id)
               .then(response => {
                if (response.status === 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    color: #99999;
}

.itemText {
    width: 100%;
    margin-left: 20px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.trashcan {
    background: #e6e6e6;
    border: none;
    color: #FF0000;
    outline: none;
}
</style>
