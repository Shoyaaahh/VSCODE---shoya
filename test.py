from datetime import datetime


def get_response(message: str) -> str:
	"""Return a simple response for a user's message."""
	normalized = message.strip().lower()

	if not normalized:
		return "Please type a message."
	if any(greeting in normalized for greeting in ("hello", "hi", "hey")):
		return "Hello! How can I help you?"
	if "name" in normalized:
		return "I'm a basic Python chatbot."
	if "time" in normalized:
		return f"The current time is {datetime.now().strftime('%H:%M:%S')}."
	if normalized in {"bye", "goodbye"}:
		return "Goodbye!"

	return "I'm still learning, but I heard you."


def main() -> None:
	print("Chatbot: Hello! Type 'quit' or 'exit' to end the chat.")

	while True:
		try:
			message = input("You: ")
		except EOFError:
			print("\nChatbot: Goodbye!")
			break

		if message.strip().lower() in {"quit", "exit"}:
			print("Chatbot: Goodbye!")
			break

		print(f"Chatbot: {get_response(message)}")


if __name__ == "__main__":
	main()
