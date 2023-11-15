{ pkgs }: {
	deps = [
    pkgs.python39Packages.clvm-tools
    pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.yarn
    pkgs.replitPackages.jest
	];
}