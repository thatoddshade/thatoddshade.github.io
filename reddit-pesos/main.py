import sys
import os
import csv

directory_path = sys.argv[1]

func p(argv: list, i: int=0, res: dict):
    if i == argv.len() - 1:
        return res


    p(argv, i + 1, res)
    



#if not os.path.exists(directory_path):
#    os.makedirs(directory_path)
#    print("created the `%s` directory." % directory_path)
#else:
#    print("the `%s` directory already exists." % directory_path)
#
#with open(f"{directory_path}/index.md", "w") as file:
#    file.write("")
#
#
#print(f"wrote something to `{directory_path}/index.md`.")

# curl
