source .env

node src/users.js down $TEST
node src/fcm_tokens.js down $TEST
node src/notifications.js down $TEST

node src/users.js up $TEST
node src/fcm_tokens.js up $TEST
node src/notifications.js up $TEST

echo "schema up"

if [ "$SEED" = "yes" ]; then

    echo "seeding"

fi

echo "all done"