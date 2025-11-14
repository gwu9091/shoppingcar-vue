// ====== quantityinput.vue (修改後的子組件) ======
<script>
export default {
    // 在 Vue 3 中，v-model 的輸入 預設使用 modelValue
    props: {
        modelValue: { // 將 prop 名稱從 value 改為 modelValue
            type: Number,
            default: 0
        }
    },
    // 2. 修正 Emits: 必須宣告 update:modelValue 事件
    emits: ['update:modelValue'], 
    
    data() {
        return {
            // 內部狀態初始化時使用 modelValue
            quantity: this.modelValue,
        }
    },
    watch: {
        // 監聽 modelValue 的變化並同步到內部 quantity
        modelValue(newValue) {
            this.quantity = newValue;
        }
    },
    methods: {
        // 核心修改點：發出 'update:modelValue' 事件
        emitUpdate() {
            // 這是將新值傳遞給父組件 v-model="value3" 的關鍵步驟
            // 確保 this.quantity 始終是數字
            this.$emit('update:modelValue', Number(this.quantity)); 
        },
        addValue() {
            this.quantity = Number(this.quantity) + 1;
            this.emitUpdate(); 
        },
        reduceValue() {
            if (Number(this.quantity) <= 0) return
            this.quantity = Number(this.quantity) - 1;
            this.emitUpdate(); 
        },
        // 處理輸入框直接輸入的數值變化
        updateFromInput(event) {
            // 使用 Number() 轉換，並檢查是否有效
            const newValue = Number(event.target.value); 
            if (!isNaN(newValue) && newValue >= 0) {
                this.quantity = newValue;
                this.emitUpdate();
            } else if (event.target.value === '') {
                // 處理清空輸入框的情況，設為 0
                this.quantity = 0;
                this.emitUpdate();
            }
        }
    }
}
</script>

<template>
    <div>
        <slot></slot>
        <button type="button" @click="reduceValue()">-</button>
        <label for="">
            <input type="number" 
                   :value="quantity" 
                   @input="updateFromInput" 
                   min="0">
        </label>
        <button type="button" @click="addValue()">+</button>
    </div>
</template>

<style scoped>
button {
    width: 50px;
    height: 50px;
    background-color: wheat;
}

input {
    width: 50px;
    height: 50px;
}
</style>