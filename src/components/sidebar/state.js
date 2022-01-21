import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)

export const ITEM_WIDTH = 40
export const ITEM_WIDTH_COLLAPSED = 35
export const itemWidth = computed(
  () => `${collapsed.value ? ITEM_WIDTH_COLLAPSED : ITEM_WIDTH}px`
)

export const ITEM_LEFT = -15
export const ITEM_LEFT_COLLAPSED = -32
export const itemLeft = computed(
  () => `${collapsed.value ? ITEM_LEFT_COLLAPSED : ITEM_LEFT}px`
)