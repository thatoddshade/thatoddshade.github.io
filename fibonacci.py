import sys

number = int(sys.argv[1])

list = [0, 1]

for i in range(number):
    print(list[-1])
    list.append(list[-2] + list[-1])
