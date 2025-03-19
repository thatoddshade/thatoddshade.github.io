{
	pkgs ? import <nixpkgs> { },
}:
# mkShell is a helper function.
pkgs.mkShell {
	name = "website development environment";
	buildInputs = [
		pkgs.zola
	];

	shellHook = ''
		cat ascii-art.txt

		echo
		echo "   /"
		echo "  /|"
		echo " /  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\\"
		echo "  that which will be either HOLY HOARD or DUMB"
		echo "         DUMP canst only thou determine."
		echo " \\_____________________________________________/"
	'';
}

