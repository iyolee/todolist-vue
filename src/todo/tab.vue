<template>
  <div class="filter">
    <span class="filter-left">未完成：{{unFinishedTodoLength}}</span>
    <span class="filter-tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="filter-clear" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
  export default {
    props: {
      filter: {
        type: String,
        required: true
      },
      todos: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        states: ['all', 'active', 'completed']
      }
    },
    computed: {
      unFinishedTodoLength() {
        return this.todos.filter(todo => !todo.filter !== false).length
      }
    },
    methods: {
      clearAllCompleted() {
        this.$emit('clearAll')
      },
      toggleFilter(state) {
        this.$emit('toggle', state)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.filter {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #ffffff;
  font-size: 14px;
  font-smoothing: antialiased;
}

.filter-left, .filter-clear, .filter-tabs {
  padding: 0 10px;
  box-sizing: border-box;
}

.filter-left, .filter-clear {
  width: 150px;
}

.filter-left {
  text-align: left;
}

.filter-clear {
  text-align: right;
  cursor: pointer;
}

.filter-tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;

  * {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0);

    &.actived {
      border-color: rgba(175, 47, 47, 0.4);
      border-radius: 5px;
    }
  }
}
</style>