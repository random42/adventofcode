source .env

function get-input {
  curl "$INPUT_URL/$1/input" --header "Cookie: session=$SESSION;" --output data/input/$1
}
