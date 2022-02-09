all:
	echo "scsynth-wasm-builds"

push-all:
	r.gitlab-push.sh scsynth-wasm-builds
	r.github-push.sh scsynth-wasm-builds
