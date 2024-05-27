export function formatView(view: number) {
  if (view < 1e3) return view;
  if (view >= 1e3 && view < 1e4) return +(view / 1e3).toFixed(0) + "천";
  if (view >= 1e4 && view < 1e8) return +(view / 1e4).toFixed(0) + "만";
  if (view >= 1e8 && view < 1e12) return +(view / 1e8).toFixed(0) + "억";
  if (view >= 1e12) return +(view / 1e12).toFixed(0) + "조";
}
