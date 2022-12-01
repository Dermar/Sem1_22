class calc:

    def add(self, a, b):
        return (a + b)

    def subtract(self, a, b):
        return (a - b)

    def multiply(self, a, b):
        return a *b

    def divide(self, a, b):
        if b == 0:
            return None
        return (a / b)


print(4.0 + 2)