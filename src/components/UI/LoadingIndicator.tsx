export default function LoadingIndicator() {
  return (
    <div className="inline-block relative w-20 h-20 my-4">
      <div
        className="lds-ring absolute box-border block w-16 h-16 m-2 border-8 border-pink-500 rounded-full animate-lds-ring"
        style={{
          animationDelay: "-0.45s",
          borderColor: "#e30d5b transparent transparent transparent",
        }}
      ></div>
      <div
        className="lds-ring absolute box-border block w-16 h-16 m-2 border-8 border-pink-500 rounded-full animate-lds-ring"
        style={{
          animationDelay: "-0.3s",
          borderColor: "#e30d5b transparent transparent transparent",
        }}
      ></div>
      <div
        className="lds-ring absolute box-border block w-16 h-16 m-2 border-8 border-pink-500 rounded-full animate-lds-ring"
        style={{
          animationDelay: "-0.15s",
          borderColor: "#e30d5b transparent transparent transparent",
        }}
      ></div>
    </div>
  );
}
