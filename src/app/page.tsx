import { Metadata } from "next"

import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area"
import { Separator } from "../../components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

import { AlbumArtwork } from "../../components/album-artwork"
import { Menu } from "../../components/menu"
import { PodcastEmptyPlaceholder } from "../../components/podcast-empty-placeholder"
import { Sidebar } from "../../components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "../../data/albums"
import { playlists } from "../../data/playlists"
import "./globals.css"
import Image from "next/image"
import { PlusCircle } from "lucide-react"

import { Button } from "../../components/ui/button"

export const metadata: Metadata = {
  title: "Musicty | Music App",
  description: "Example music app using the components.",
}

export default function MusicPage() {
  return (
    <>
      <div className="hidden md:block">
          <Menu />
          <div className="border-t">
              <div className="bg-background">
                  <div className="grid lg:grid-cols-5">
                      <div className="col-span-3 lg:col-span-4 lg:border-l">
                          <div className="h-full px-4 py-6 lg:px-8">
                              <div className="flex">
                                  <Sidebar playlists={playlists} className="w-64" />
                                  <Tabs defaultValue="music" className="h-full space-y-6">
                                      <div className="space-between flex items-center">
                                          <TabsList>
                                              <TabsTrigger value="music" className="relative">
                                                  Music
                                              </TabsTrigger>
                                              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                                              <TabsTrigger value="live" disabled>
                                                  Live
                                              </TabsTrigger>
                                          </TabsList>
                                      </div>
                                      <TabsContent value="music" className="border-none p-0 outline-none">
                                          <div className="ml-auto mr-4">
                                              <Button>
                                                  <PlusCircle className="mr-2 h-4 w-4" />
                                                  Add music
                                              </Button>
                                          </div>
                                          <div className="flex items-center justify-between">
                                              <div className="space-y-1">
                                                  <h2 className="text-2xl font-semibold tracking-tight">
                                                      Listen Now
                                                  </h2>
                                                  <p className="text-sm text-muted-foreground">
                                                      Top picks for you. Updated daily.
                                                  </p>
                                              </div>
                                          </div>
                                          <Separator className="my-4" />
                                          <div className="relative">
                                              <ScrollArea>
                                                  <div className="flex space-x-4 pb-4">
                                                      {listenNowAlbums.map((album) => (
                                                      <AlbumArtwork key={album.name} album={album} className="w-[250px]" aspectRatio="portrait" width={250} height={330} />
                                                      ))}
                                                  </div>
                                                  <ScrollBar orientation="horizontal" />
                                              </ScrollArea>
                                          </div>
                                          <div className="mt-6 space-y-1">
                                              <h2 className="text-2xl font-semibold tracking-tight">
                                                  Made for You
                                              </h2>
                                              <p className="text-sm text-muted-foreground">
                                                  Your personal playlists. Updated daily.
                                              </p>
                                          </div>
                                          <Separator className="my-4" />
                                          <div className="relative">
                                              <ScrollArea>
                                                  <div className="flex space-x-4 pb-4">
                                                      {madeForYouAlbums.map((album) => (
                                                      <AlbumArtwork key={album.name} album={album} className="w-[150px]" aspectRatio="square" width={150} height={150} />
                                                      ))}
                                                  </div>
                                                  <ScrollBar orientation="horizontal" />
                                              </ScrollArea>
                                          </div>
                                      </TabsContent>
                                      <TabsContent value="podcasts" className="border-none p-0 outline-none">
                                          <div className="flex items-center justify-between">
                                              <div className="space-y-1">
                                                  <h2 className="text-2xl font-semibold tracking-tight">
                                                      New Episodes
                                                  </h2>
                                                  <p className="text-sm text-muted-foreground">
                                                      Your favorite podcasts. Updated daily.
                                                  </p>
                                              </div>
                                          </div>
                                          <Separator className="my-4" />
                                          <PodcastEmptyPlaceholder />
                                      </TabsContent>

                                  </Tabs>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
