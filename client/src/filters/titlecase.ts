export default function titlecase() {
    return function(input : string) {
        var words : string[] = input.split(' ');
        words = words.map( function(w) { 
            return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
        });
        return words.join(' ');
    }
}