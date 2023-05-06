<script setup>
import { ref } from "vue";
import { useTableStore } from "@/stores/table";
import IconClose from "~/icons/IconClose.vue";
import AppButton from "@/components/AppButton.vue";

// Stores
const tableStore = useTableStore();
// Const
const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const data = ref({
  backDrop: "",
  firstName: "",
  lastName: "",
  email: "",
  amount: "",
});
// Computed
// Handlers
const emit = defineEmits(["close-modal"]);
// Hooks
const editData = (id, data) => {
  tableStore.editItemData(id, data);
  emit("close-modal");
};
</script>

<template>
  <div
    ref="backDrop"
    class="backdrop w-full h-full bg-violet absolute top-0 left-0 z-[10] opacity-90"
    @click="emit('close-modal')"
  ></div>
  <div
    class="modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] rounded-[8px] p-[40px] pt-[20px] z-50 bg-white"
  >
    <IconClose
      class="absolute -top-[10px] -right-[10px] bg-white rounded-full w-[30px] h-[30px] p-[7px] shadow-tooltip cursor-pointer"
      @click="emit('close-modal')"
    />
    <h2
      class="text-[22px] font-bold text-violet text-center mb-[15px] uppercase"
    >
      Edit Data
    </h2>
    <form
      @submit.prevent="editData(item.id, data)"
      class="flex flex-col gap-[15px] w-full"
      v-if="item"
    >
      <input
        type="text"
        v-model="data.firstName"
        :placeholder="item['first name']"
        class="app-edit"
      />
      <input
        type="text"
        v-model="data.lastName"
        :placeholder="item['last name']"
        class="app-edit"
      />
      <input
        type="email"
        v-model="data.email"
        :placeholder="item['email']"
        class="app-edit"
      />
      <input
        type="number"
        v-model.number="data.amount"
        :placeholder="item['amount']"
        class="app-edit"
      />
      <AppButton
        class="text-[16px] w-full font-semibold text-white bg-violet rounded-[6px] h-[42px] uppercase flex items-center justify-center p-[10px] hover:bg-dark"
      >
        Save Data
      </AppButton>
    </form>
  </div>
</template>
