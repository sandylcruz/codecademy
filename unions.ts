// defining unions
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG: ${statement}`);
}

printNumsAndStrings("hello!");
printNumsAndStrings(1);

// type narrowing
function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

formatValue("Hiya");
formatValue(42);

// inferred union return types
type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

const userData: string | User = createUser();

// unions and arrays
function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === "string") {
      return listing.toUpperCase();
    }

    if (typeof listing === "number") {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  "123 Main St",
  226800,
  "580 Broadway Apt 4a",
  337900,
]);

console.log(result);

// common key value pairs
type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: "vkrauss",
  displayName: "Veronica Krauss",
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);

// unions with literal types
type Status = "idle" | "downloading" | "complete";

const downloadStatus = (status: Status) => {
  if (status === "idle") {
    console.log("Download");
  } else if (status === "downloading") {
    console.log("Downloading...");
  } else if (status === "complete") {
    console.log("Your download is complete!");
  }
};

downloadStatus("idle");
