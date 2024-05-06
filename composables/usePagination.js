export function usePagination(totalPages) {
  const currentPage = ref(1);
  const delta = 2;

  const route = useRoute();

  const pagesToShow = computed(() => {
    const startPage = Math.max(1, currentPage.value - delta);
    const endPage = Math.min(totalPages.value, currentPage.value + delta);
    const pages = [];

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    return pages;
  });


  return {
    pagesToShow
  };
}