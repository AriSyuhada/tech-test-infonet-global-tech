<script setup>
</script>

<template>
  <main class="p-5">
    <h1 class="text-5xl font-semibold">Welcome to VUE-APP!</h1>
    <h2 class="text-2xl">Hello, my name is {{ name }}</h2>
    <div class="flex flex-col lg:flex-row my-10 gap-y-4 lg:gap-x-4">
      <div class="flex flex-col gap-y-6 p-5 border-dashed border-2 dark:border-[#bbb] border-[#555] basis-[50%]">
        <div class="flex flex-row justify-end">
          <!-- Add more input button -->
          <button class="flex flex-row gap-x-1 p-1 rounded-lg bg-blue-500 font-bold" @click="addInput">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Item
          </button>
        </div>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-y-4">
          <!-- Iterating through array and show it as wrapped inputs element -->
          <div class="flex flex-col items-start lg:flex-row gap-y-4 lg:gap-x-3" v-for="input in form" :key="input.key">
            <select class="order-2 lg:order-first dark:bg-[#555] border-solid border-[1px] dark:border-[#bbb] border-[#555] rounded-lg px-3 py-1 basis-[45%]" v-model="input.criteria" name="criteria" placeholder="Select Criteria">
              <option value="" disabled selected>Select Criteria</option>
              <option v-for="opt in selection" :key="opt" :value="opt">{{opt}}</option>
            </select>
            <input class="order-last lg:order-2 dark:bg-[#555] border-solid border-[1px] dark:border-[#bbb] border-[#555] rounded-lg px-3 py-1 basis-[45%]" v-model="input.val" type="text" placeholder="Value">
            <button class="order-first lg:order-last p-1 rounded-lg bg-red-400" @click="removeInput" @submit.prevent>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6 fill-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="p-4 dark:bg-[#555] bg-[#bbb] rounded-md whitespace-nowrap basis-[50%]">
        <!-- Showing the input objects state -->
        <code>
          <pre>{{ getFormState }}</pre>
        </code>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {

  },
  data() {
    return {
      name: 'Ari Syuhada',
      selection: [
        'Age',
        'Education',
        'Interest',
        'Language',
        'Marital Status',
        'Skill',
      ],
      count: 0,
      form: [
        {
          key: 'input-0',
          criteria: '',
          val: '',
        }
      ],
    }
  },
  methods: {
    addInput: function () {
      this.form.push(
        {
          key: 'input-' + ++this.count,
          criteria: '',
          val: '',
        }
      );
    },
    removeInput: function (event) {
      this.form.splice(this.form.indexOf(event), 1);
    },
    handleSelectCriteria: function (event, input) {
      input.criteria = event.value;
    },
    handleSubmit: function () {
      console.log(this.form);
    }
  },
  computed: {
    getFormState() {
      const formattedArray = this.form.map((item) => ({
        criteria: item.criteria,
        val: item.val,
      }));

      return JSON.stringify(formattedArray, undefined, 2);
    }
  }
}
</script>

