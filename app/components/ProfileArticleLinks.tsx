import Link from 'next/link';
import { getProfile, type ProfileSlug } from '../lib/site-data';

export function ProfileTags({ slugs }: { slugs: ProfileSlug[] }) {
  if (!slugs.length) return null;
  return <div className="profile-tags"><span>Work Profiles</span><div className="category-list">{slugs.map((slug) => <Link className="category-chip" key={slug} href={`/profiles/${slug}/#related-articles`}>{getProfile(slug)?.name}</Link>)}</div></div>;
}

