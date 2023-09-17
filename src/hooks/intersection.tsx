export const useIntersection = (id: string, callback: any) => {
  if (typeof window !== "undefined") {
    const observer = new window!.IntersectionObserver(
      ([entr]) => {
        entr.isIntersecting && callback();
      },
      {
        threshold: 0.5,
      }
    );

    setTimeout(() => {
      observer.observe(document.querySelector(`#${id}`)!);
    }, 500);
  }
};
