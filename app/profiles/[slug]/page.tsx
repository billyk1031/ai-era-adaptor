import { notFound } from 'next/navigation';
import { pageMetadata } from '../../lib/seo';
import { getProfile, profiles } from '../../lib/site-data';
import { getProfileWalkthrough } from '../../lib/profile-walkthroughs';
import AnalystWalkthrough from '../AnalystWalkthrough';
import ProfileWalkthrough from '../ProfileWalkthrough';

export function generateStaticParams() {
  return profiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfile((await params).slug);
  return profile ? pageMetadata({
    title: profile.name,
    description: `See how AI may affect ${profile.name.toLowerCase()} and follow a typical SWOT through a goal, actions and review.`,
    path: `/profiles/${profile.slug}/`,
    image: { url: `/work-profiles/${profile.slug}.jpg`, alt: `Illustrated tools and work associated with ${profile.name}`, width: 1254, height: 1254 },
  }) : {};
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfile((await params).slug);
  if (!profile) notFound();
  if (profile.slug === 'analysts') return <AnalystWalkthrough />;
  const walkthrough = getProfileWalkthrough(profile.slug);
  if (!walkthrough) notFound();
  return <ProfileWalkthrough profile={profile} walkthrough={walkthrough} />;
}
