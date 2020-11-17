export default function dogReducer(state, action) {
  switch (action.type) {
    case "remove":
      return [];
    case "add":
      return [...state, {"img": action.dog, "speed": false}]
    case "addSpeed":
      return state.map((item) => {
        if (item.img === action.id) {
          item.speed = true
        }
        return item;
      })
    case "removeSpeed":
      return state.map((item) => {
        if (item.img === action.id) {
          item.speed = false
        }
        return item;
      })
    default:
    throw new Error("No action" + action.type)
  }
}
