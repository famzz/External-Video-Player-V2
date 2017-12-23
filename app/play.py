import os
import subprocess
import sys


def play(url):
    if sys.platform.startswith('darwin'):
        subprocess.call(('open', url))
    elif os.name == 'nt':
        os.startfile(url)
    elif os.name == 'posix':
        subprocess.call(('xdg-open', url))


url = input("Please enter a url to open:\n")

play(url)
