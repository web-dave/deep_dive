interface Observer {
  next: () => {};
  error: () => {};
  complete: () => {};
}
setInterval(() => {
  hotObservable?.observer?.next('jhgljg');
}, 1500);
const hotObservable = {
  observer: null,
  subscribe: function (obs: Observer) {
    this.observer = obs;
    return function unsubscribe() {
      this.observer = null;
    };
  }
};

const observable = {
  observer: null,
  subscribe: function (obs: Observer) {
    this.observer = obs;
    fetch('https://api.swapi.dev/people/1').then((data) => this.observer.next(data));
    return function unsubscribe() {
      this.observer = null;
    };
  }
};
