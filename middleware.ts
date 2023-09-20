import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({
        req,
        res
    });

    await supabase.auth.getSession();
    return res;
};
