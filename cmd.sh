source .env

function get-input {
  mkdir -p data/input
  curl "$INPUT_URL/$1/input" --header "Cookie: session=$SESSION;" --output data/input/$1
}
