class App {
	contructor(window) {
		this.window = window
	}
	
	static guest() {
		window.webkit.messageHandlers.guest.postMessage({"":""});
	}
	static signin(args) {
		window.webkit.messageHandlers.signin.postMessage({"args":args});
	}
  static register(args) {
		window.webkit.messageHandlers.register.postMessage({"args":args});
	}
	
}
