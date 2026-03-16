// ES Module wrapper for the Supabase UMD bundle (supa.js)
// This file allows the service worker to import createClient using ES module syntax

// Import the UMD bundle which assigns to self.supabase
import './supa.js';

// Export createClient from the global self.supabase object
export const createClient = self.supabase.createClient;
export default self.supabase;
