<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="$emit('currentPage', pagination.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: i === pagination.current_page }"
        v-for="i in pagination.total_pages"
        :key="i"
      >
        <a class="page-link" href="#" @click.prevent="$emit('currentPage', i)">{{ i }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('currentPage', pagination.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination'],
}
</script>
